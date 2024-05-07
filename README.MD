# SHOPAPI
Este proyecto es una api fullrest aplicada, simulando una tienda y sus posibles usos.

# Tegnologias
Se usara nodejs, junto con express, mysql, y jwt para la autenticacion de cuentas

#   Endpoints
Tenemos 3 sub categorias de endpoints 
+ **"/api/auth"**
+ **"/api/supplier"**
+ **"/api/product"**

/api/auth
Este conjunto de endpoints permite la autenticacion a la aplicacion y es el unico acessible sin autenticacion, los endpoints que contiene son los siguientes:

! POST
**/api/auth/register**

necesita los siguientes parametros en el body en forma json raw.
{
    "email":"<example>",
    "password":"<example>",
}

! POST
**/api/auth/login**
necesita los siguientes parametros en el body en forma json raw.
{
    "email":"<example>",
    "password":"<example>",
}