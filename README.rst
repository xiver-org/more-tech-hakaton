.. raw:: html

   <p align="center">
        <h1 align="center">Xiver Vault</h1>
    </p>

    <p align="center">
        <h3 align="center"><b>!Продукт находится в разработке и не показывает итоговый вариант!</b></h3>
    </p>

=========

Developing
^^^^^^^^^^

*Dependencies*:

* `make`
* `docker-compose`
* `docker`

.. code-block:: shell

    git clone https://github.com/xiver-org/vault.git; cd vault-master
    cp .env.example .env.dev
    make


Prodaction
^^^^^^^^^^

*Dependencies*:

* `make`
* `docker-compose`
* `docker`

.. code-block:: shell

    mkdir /opt/xiver
    cd /opt/xiver
    git clone https://github.com/xiver-org/vault.git; cd vault-master
    cp .env.example .env
    make DEV=0
