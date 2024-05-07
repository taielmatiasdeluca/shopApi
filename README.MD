# SHOPAPI
Este proyecto es una api fullrest aplicada, simulando una tienda y sus posibles usos.  

## Tegnologias ##
Se usara nodejs, junto con express, mysql, y jwt para la autenticacion de cuentas    

##  Endpoints ##
Tenemos 3 sub categorias de endpoints  
+ **/api/auth**
+ **/api/supplier**
+ **/api/product**


### **/api/auth** ###

Este conjunto de endpoints permite la autenticacion a la aplicacion y es el unico  acessible sin autenticacion, los endpoints que contiene son los siguientes:


#### /api/auth/register ####
Se consume en metodo **POST**, necesita los siguientes parametros en el body en forma json raw.
\n
`
{
    "email":"<string>",
    "password":"<string>",
}
`

#### /api/auth/login ####
Se consume en metodo **POST**, necesita los siguientes parametros en el body en forma json raw.  
`
{
    "email":"<string>",
    "password":"<string>",
}
`


### **/api/product** ###
Este conjunto de endpoints permite la obtencion creacion y gestion de productos.    

#### /api/product/new ####
Se consume en metodo **POST**, necesita los siguientes parametros en el body en forma json raw.  
`
{
    "name":"<string>",
    "quantity":"<integrer>",
     "imageUrl":"<string>",
    "unitPrice":"<float>",
}
`


#### /api/product/list/:page/:amount ####
Se consume en metodo **GET**, necesita los siguientes parametros  
:page = pagina actual de productos  
:amount = permite modificar la cantidad de productos por pagina

#### /api/product/list/:page/:amount ####
Se consume en metodo **GET**, necesita los siguientes parametros  
:page = pagina actual de productos  
:amount = permite modificar la cantidad de productos por pagina

#### /api/product/:id ####
Se consume en metodo **DELETE**, necesita los siguientes parametros  
:id = id del producto a eliminar.

#### /api/product/:id ####
Se consume en metodo **GET**, necesita los siguientes parametros  
:id = id del producto a obtener.


#### /api/product/suppliers/:id ####
Se consume en metodo **GET**, necesita los siguientes parametros
:id = id del producto a obtener los proovedores.



