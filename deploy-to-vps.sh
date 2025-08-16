#!/usr/bin/env bash
set -euo pipefail

# --- Configuration ---
COMPOSE_FILE="docker-compose.prod.yaml"
TAR_FILE="docker_images.tar"
REMOTE_USER="root"
# REMOTE_HOST="217.160.99.172"
REMOTE_HOST="ionos"
REMOTE_PORT=22
REMOTE_PATH="/root/apps-FOLDER/memorytwins"    # adjust if you want a different directory on the VPS

# --- 1) Build all images ---
echo "Building images from ${COMPOSE_FILE}..."
docker compose -f "${COMPOSE_FILE}" build

# --- 2) Gather image names ---
echo "Gathering image names..."
IMAGES=$(docker compose -f "${COMPOSE_FILE}" config | \
  grep 'image:' | awk '{print $2}' | sort -u)

if [[ -z "${IMAGES}" ]]; then
  echo "❌ No images found in ${COMPOSE_FILE}. Exiting."
  exit 1
fi

echo "Images to save:"
echo "${IMAGES}"

# --- 3) Save images to tarball ---
echo "Saving images into ${TAR_FILE}..."
docker save -o "${TAR_FILE}" ${IMAGES}

# --- 4) Rsync tarball to remote server ---
# echo "Uploading ${TAR_FILE} to ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH} ..."
# rsync -avz -e "ssh -p ${REMOTE_PORT}" "${TAR_FILE}" \
#   "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}"

echo "Uploading ${TAR_FILE} to ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH} ..."

# rsync -avz --progress -e "ssh -p ${REMOTE_PORT}" "${TAR_FILE}" \
#   "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}"

rsync -avz --info=progress2 -e "ssh -p ${REMOTE_PORT}" "${TAR_FILE}" \
  "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}"


echo "✅ Deployment tarball uploaded successfully."
