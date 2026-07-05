
/*

Virtual Machine is the advancement of Physical Machine(Laptop).

Container is the advancement of Virtual Machine.
*/

// Hypervisor :

/* 
To overcame the problem of Physical Machine.

There was a new concept in technology called Hypervisor.
Hypervisor uses the concept called virtualization.
*/

// Virtualization :
/*
Virtualization is at the top of our physical machine.

Virtualization Machine have two major part Application and their Operating System.

Means Each Application has their respective OS and these two things is called Virtual Machine.

But all application will run in same physical server but they are logically tightly saperated not tightly coupled because of their individual OS that they have.

Saperation of those Virtual Machine(Application + OS) will do by Hypervisor and that Hypervisor is installed top of our physical server.
*/

/*
To check that is my docker running or not

docker run hello-worl
*/

/* 
by default docker has to be installed by root user only 
and docker demon also executes the root user

that is one more dropback of docker 
because it's is single process means monolithick process

as docker demon run by root user that means hacker can hack our entire system
if docker demon goes down than our container will affected

*/