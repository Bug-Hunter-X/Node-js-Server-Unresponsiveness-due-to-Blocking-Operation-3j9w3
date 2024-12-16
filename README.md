# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js where a long-running synchronous operation in the request handler blocks the event loop, causing the server to become unresponsive.  The `bug.js` file contains the problematic code, while `bugSolution.js` shows how to resolve the issue using asynchronous operations.

## Problem

The `bug.js` file includes a `for` loop that simulates a long-running task. This loop is executed synchronously within the request handler, preventing Node.js from processing other requests until the loop completes.

## Solution

The `bugSolution.js` file demonstrates how to resolve this issue by using asynchronous operations.  Instead of performing the long-running task synchronously, it's now handled asynchronously, allowing the event loop to continue processing other requests.