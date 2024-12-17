# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /

# Copy the application files into the working directory
COPY package*.json ./

COPY . .

# Install the application dependencies
RUN npm install

EXPOSE 3000 

# Define the entry point for the container
CMD ["node", "app.js"]