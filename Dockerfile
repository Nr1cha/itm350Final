# Use the official Node.js image
FROM node:20

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy app files
COPY package*.json ./
COPY app.js ./
COPY jsFile/ ./

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]
