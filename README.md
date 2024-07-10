# Turbo Ecom

A modern eCommerce application built with Next.js, Prisma, Turborepo, and Shadcn.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Docker](https://www.docker.com/get-started) - to run PostgreSQL database in a container
- [pnpm](https://pnpm.io/installation) - for package management

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Kiranism/turbo-ecom.git
    ```

2. If you are using Windows, ensure Docker is installed and running. 

3. Navigate to the root directory and run the following command to start the PostgreSQL database in Docker:

    ```bash
    docker-compose up
    ```

4. Install the dependencies:

    ```bash
    pnpm install
    ```

5. Run the development server:

    ```bash
    pnpm run dev
    ```

### Usage

- The application should now be running at [http://localhost:3000](http://localhost:3000).

### Deployment

Instructions for deploying the application will be provided here.

## Built With

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Turborepo](https://turborepo.org/)
- [Shadcn](https://shadcn.dev/)

