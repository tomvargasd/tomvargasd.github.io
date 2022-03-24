---
title: Requisitos para comenzar tus proyectos de software
description: ¿Realmente es importante comenzar desde la documentación?
date: 2022-02-26
draft: false
slug: /pensieve/requerimientos
tags:
  - requisitos
  - software
---

# 🔦 Importancia de la ingeniería de requerimientos

Muchas veces hemos escuchado lo importante que es la **ingeniería de software**, por lo general, es algo tedioso o complejo para algunos, sin embargo, para hacer las cosas bien en cualquier aspecto, es **vital** tener una visión general y conocimiento amplio sobre el tema o los temas a realizar.

Vemos temas como el **levantamiento de información**, diagramas **UML**, la documentación, etc. pero es algo que de manera directa o indirecta ya estamos familiarizados, al menos si de desarrollo de **software** nos referimos, por ejemplo, cuando tienes una asignación de alguna práctica o deber, lo primero que ves son instrucciones como "crear una aplicación en python que permita ingresar 2 números y que calcule la multiplicación de ambos."
En este caso se pueden **identificar** dos requerimientos:
* Ingresar 2 números (enteros/decimales)
* Calcular la multiplicación entre los números ingresados 
Teniendo en cuenta estos requisitos podemos comezar a realizar nuestra aplicación, pero es importante saber **delimitar requisitos** ya que muchas veces al definirlos se tiende a crear **ambigüedades** o a definirlos de manera poco específica, por ese motivo hay que tener siempre en mente el **detallarlos** de la manera más especifica posible y **sin** abarcar varias funcionalidades.

Ahora, para los diagramas **UML**, existen muchos y no es necesario diagramarlos todos para un proyecto, eso es algo que debes **analizar** con detenimiento y hacer los que más **especifiquen** tu proyecto, sin embargo, no es bueno solo conocer dos o tres diagramas UML, **mientras más mejor**, de esa manera podrás tener una versatilidad de herramientas para tus documentos de especificación.

# 🤔 ¿Qué hacer para empezar tus proyectos?

¡Levanta información!, la que más se pueda. Esto sin duda te ayudará a tener una visión amplia de lo que vas a realizar, pero, ¿como levatar la información? pues es algo simple, existen dos escenarios, el primerao es que tengas un cliente (o profesor), el segundo es un proyecto personal.

Para el primer escenario donde tenemos un cliente, es vital organizar una reunion ya sea virtual o presencial, dedicar al menos media hora para determinar que es lo que el quiere, muchas veces tu cliente te dirá todo de manera informal, es decir a su manera de entender el proyecto (su idea de proyecto). Un pequeño ejemplo sería:
"Quiero una aplicación movil que pueda crear facturas y me deje imprimirla directamente, también que me deje ver todas las facturas que se han hecho y que cada cliente tenga un registro para saber si es un cliente frecuente".

En ese caso nuestro deber es armar cada requisito de manera especifica, por ejemplo:
* **Requisito 1:** Guardar factura en el sistema con datos del cliente y detalles
* **Requisito 2:** Registrar cliente a partir de la primera factura
De esa manera poco a poco vamos a tener nuestros requisitos listos para el siguiente paso.

Ahora para el segundo escenario en el que nosotros queremos empezar con un proyecto personal lo más importante sería definir lo que queremos, muchas veces basta con una lluvia de ideas en la que definimos de manera informal todo lo que queremos desarrollar, sin embargo, existen ocaciones en las que nos va a tocar investigar, si no tenemos conocimientos de algo no podemos definirlo de manera correcta, como ejemplo podemos decir que si quieres hacer un sistema para administrar cultivos, y no sabes nada relacionado a cultivar, lo que tendrías que investigar sería que tipo de cultivo vas a analizar, y si vas a abarcar todo, cuantos tipos de cultivos hay, también puedes investigar como puedes llevar un control en cada uno de ellos, cada cuanto debes regar, abonar o fumigar, todo eso y mucho más para tener requerimientos específicos como: 
* Permitir seleccionar el cultivo del usuario (Perenne, Ciclicos, Bienal, temporal)
* Permitir seleccionar el tipo de abono que se está utilizando (Orgánico, Químico)

Una vez tus requisitos estén listos, puedes empezar a crear modelos UML, uno de los más conocidos son los diagramas de clases, diagramas de estado, diagramas de caso de uso, entre otros. En otra ocación estará disponible un tema sobre UML sin embargo, basta con decir que estos diagramas te ayudarán de una manera impactante en el desarrollo de tu aplicación, teniendo tu diagrama de objetos ya tendrás una idea general y especifica de como estará estructurado tu base de datos y tu código.

  <span style="color:#93ddfb">@author </span>Tomás Vargas

> Si te gustó este contenido no dudes en seguirme en mis redes sociales, puedes instalar mi página como si de una app se tratase y estar al día de las nuevas publicaciones ☝️