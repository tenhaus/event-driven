FROM mcr.microsoft.com/dotnet/sdk:7.0
WORKDIR /service
COPY . .
RUN dotnet build
CMD [ "dotnet", "run" ]