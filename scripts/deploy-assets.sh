#!/bin/bash

# Function to check if S3 environment variables are set
verify_env_vars() {
  if [ -z "$S3_BUCKET_URI" ] || [ -z "$S3_ASSETS_URI" ]; then
    return 1 # Not all variables are set
  else
    return 0 # All necessary variables are set
  fi
}

target_env=$1

# Try loading .env file if required env vars are not already set
if ! verify_env_vars; then
  if [ -f .env ]; then
    echo "Sourcing environment variables from .env file..."
    source .env

    # Re-check if the necessary variables are set after sourcing .env
    if ! verify_env_vars; then
      echo "Error: S3_BUCKET_URI and/or S3_ASSETS_URI are not set."
      exit 1
    fi
  else
    echo ".env file not found and environment variables not set."
    exit 1
  fi
else
  echo "S3 environment variables already set."
fi

# Determine assets source and destination based on the target environment
case $target_env in
  "prod") # From stage to prod
    s3_src="${S3_ASSETS_URI}/stage"
    s3_dest="${S3_ASSETS_URI}/prod"
    ;;
  "stage") # From test to stage
    s3_src="${S3_ASSETS_URI}/test"
    s3_dest="${S3_ASSETS_URI}/stage"
    ;;
  *)
    echo "Error: target environment not specified or is invalid. Must be 'prod' or 'stage'."
    exit 1
    ;;
esac

# Perform recursive copy
echo "Copying assets from \"$s3_src\" to \"$s3_dest\""
aws s3 cp "$s3_src" "$s3_dest" --recursive
