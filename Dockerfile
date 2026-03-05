# Use Node 22 LTS base image
FROM node:22.11.0

# Set working directory
WORKDIR /app

# Install dependencies for Android builds
RUN apt-get update && \
    apt-get install -y openjdk-17-jdk wget unzip git curl && \
    rm -rf /var/lib/apt/lists/*

# Install yarn globally
RUN npm install -g yarn

# Copy package.json and package-lock.json / yarn.lock first
COPY package.json package-lock.json* yarn.lock* ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose Metro Bundler port
EXPOSE 8081

# Start Metro bundler by default
CMD ["npx", "react-native", "start"]