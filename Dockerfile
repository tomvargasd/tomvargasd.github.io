# Use Node.js 18 as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the Gatsby site
RUN npm run build

# Install a simple HTTP server to serve static files
RUN npm install -g serve

# Expose port 80
EXPOSE 80

# Serve the static files
CMD ["serve", "-s", "public", "-l", "80"]
