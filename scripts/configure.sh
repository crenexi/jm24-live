#!/bin/bash

# Function to check if CodeArtifact variables are set
verify_env_vars() {
  if [ -z "$CODEARTIFACT_REGION" ] || [ -z "$CODEARTIFACT_OWNER" ] || [ -z "$CODEARTIFACT_DOMAIN" ] || [ -z "$CODEARTIFACT_REPO" ]; then
    return 1
  else
    return 0
  fi
}

# Try loading .env file if required env vars are not already set
if ! verify_env_vars; then
  if [ -f .env ]; then
    echo "Sourcing environment variables from .env file..."
    source .env

    # Re-check if the necessary variables are set after sourcing .env
    if ! verify_env_vars; then
      echo "Error: One or more CodeArtifact variables are not set."
      exit 1
    fi
  else
    echo ".env file not found and environment variables not set."
    exit 1
  fi
else
  echo "CodeArtifact environment variables already set."
fi

# Set local variables for readability
region=$CODEARTIFACT_REGION
owner=$CODEARTIFACT_OWNER
domain=$CODEARTIFACT_DOMAIN
repo=$CODEARTIFACT_REPO

# Clear the global registry
npm config delete registry

# Connect with package repos
echo "Connecting with CodeArtifact repository..."
aws --region $region codeartifact login --tool npm --domain-owner $owner --domain $domain --repository $repo
