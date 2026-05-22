#!/bin/bash

echo "Running FableTech Website Tests..."

echo "Installing Playwright browsers..."
npx playwright install --with-deps

echo "Starting preview server..."
npm run preview &
PREVIEW_PID=$!

sleep 5

echo "Running tests..."
npx playwright test

TEST_EXIT_CODE=$?

echo "Stopping preview server..."
kill $PREVIEW_PID

exit $TEST_EXIT_CODE
