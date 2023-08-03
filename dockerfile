# Use the .NET 7.0 SDK as the base image
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

# Set the working directory inside the container for backend
WORKDIR /azure-closet-app/backend

# Copy the backend project file to the container and restore dependencies
COPY backend/*.csproj ./
RUN dotnet restore

# Copy the entire backend folder to the container
COPY backend/ ./

# Build the backend application
RUN dotnet publish -c Release -o out

# Use a lighter base image for the runtime that supports ASP.NET 7.0 (modify if needed)
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS runtime

# Set the working directory inside the container
WORKDIR /azure-closet-app/backend

# Copy the appsettings.json file to the container (update the path if necessary)
COPY backend/appsettings.json ./appsettings.json

# Copy the published output from the build image for backend to the runtime image
COPY --from=build /azure-closet-app/backend/out ./backend

# Expose the port that your ASP.NET application listens on (replace 80 with your port number if different)
EXPOSE 80

RUN ls /azure-closet-app/backend

# Set the entry point for the container to start your ASP.NET application
ENTRYPOINT ["dotnet", "backend/closet.dll"]
