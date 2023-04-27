# Use the official Node.js image as the base image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the prisma folder and generate the Prisma client
COPY prisma ./prisma
RUN npx prisma generate

COPY .env ./

RUN npx prisma migrate deploy

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which the server will run
EXPOSE 4000

# Start the server
CMD ["node", "server.js"]
