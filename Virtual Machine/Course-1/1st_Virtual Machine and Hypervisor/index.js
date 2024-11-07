
// Server

/* 
Server is nothing but a physical system like laptop but that physical system has things that we would use to run a server like RAM, CPU, OS.

Suppose a company want a server where they can deploye their application and their application want 10GB RAM, 12 CPU and OS.
Suppose a company bought a physical server from HP or IBM with 100GB RAM and 100 CPU.

Why they bought 100GB RAM and 100CPU eventhough their application want only 10GB RAM and 12 CPU because in future their application would be
groww and that time they would more 50GB RAM and 25CPU that's why they bought a physical server with that configuration but end of the day this
will not a good approach.

Because we are wasting our resources.

To resolve this problem Virtualization has came into picture.
*/

// Virtualization : 

/* 
Virtualization is nothing but a virtual machine means it is not a physical machine we can not touch it we can use it logically means eventhough it is 
a part of our physical server but logically not physical.

Suppose we bought a physical server with 100GB RAM and 100CPU and we will seperate it logically and that seperation will give us Virtual machine(VM)
with different configuration like we have logically seperate our physicall server into multiple VM with different configuration like :
VM1 has 10GB RAM, 12CPU, OS
VM2 has 20GB RAM, 28CPU, OS
VM2 has 30GB RAM, 12CPU, OS
VM2 has 40GB RAM, 40CPU, OS

Each VM has their own seperate RAM, CPU and OS means each VM depends or use their own configuration.
Each VM could be use by different team means end to end every team will be used logically one physical server.

Now wasting of our physical server now stoped.

But how this logically seperation of physical server has been happening.

So this is done by a software called Hypervisor.
*/

// Hypervisor : 

/* 
Hypervisor is nothing but a software which is installed into our physical server.

By using the Hypervisor software we can installed different virtual machines on our physical server.
means based on our requirement we are logically seperated our physical server and multiple VM(server) has been creating with different
configuration.

There are many Hypervisor software like : vmWare, Xen and so on.
*/

// VM is present on the top of our physical server.