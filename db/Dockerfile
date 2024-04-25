# Use an official MySQL image as the base
FROM mysql:latest

# Set the root password (change 'your_password' to your desired password)
ENV MYSQL_ROOT_PASSWORD adminadmin

# Optionally, create a database and user
ENV MYSQL_DATABASE test
ENV MYSQL_USER root
ENV MYSQL_PASSWORD adminadmin

# Copy the custom configuration file (if any)
# COPY my.cnf /etc/mysql/my.cnf

# Optionally, expose ports if needed (e.g., for external connections)
EXPOSE 3306

# Optionally, define a startup script
# COPY init.sql /docker-entrypoint-initdb.d/

# Optionally, specify the command to run on container startup
CMD ["mysqld"]

# Note: Uncomment and modify the lines as per your requirements
