# I used an apache server docker image that I had to run the app for this demo.
# To deploy it to prod it probably would be better to use a html assets server or similar.
FROM composer:1.6.5 as build
WORKDIR /app
COPY build /app

FROM php:7.4-apache

EXPOSE 8080
COPY --from=build /app /var/www/html
COPY docker/000-default.conf /etc/apache2/sites-available/000-default.conf

RUN echo "Listen 8080" >> /etc/apache2/ports.conf
RUN chown -R www-data:www-data /var/www/html/ \
    && a2enmod rewrite
