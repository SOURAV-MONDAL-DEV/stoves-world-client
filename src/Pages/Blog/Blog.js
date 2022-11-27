import React from 'react';

const Blog = () => {
    return (
        <div className='md:mx-10'>
            <div className='lg:mx-2 grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto my-10'>
                <div className="card card-compact w-96 md:w-full bg-base-100 shadow-xl mx-auto">
                    <div className="card-body">
                        <h2 className="card-title text-green-600 font-bold">Difference between SQL and NoSQL</h2>
                        <p maxlength="50">The Main Differences:<br />

                            Type –<br />
                            SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.<br />


                            Language –<br />
                            SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system.
                            A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go.<br />



                            Scalability –<br />
                            In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. But on the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database. It is similar to adding more floors to the same building versus adding more buildings to the neighborhood. Thus NoSQL can ultimately become larger and more powerful, making these databases the preferred choice for large or ever-changing data sets.<br />


                            Structure –<br />
                            SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure. </p>
                    </div>
                </div>
                <div className="card card-compact w-96 md:w-full bg-base-100 shadow-xl mx-auto">
                    <div className="card-body">
                        <h2 className="card-title text-green-600 font-bold">What is JWT, and how does it work?</h2>
                        <p maxlength="50"><bold>JWT</bold>, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.<br />
                            JWT differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                            A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

                            Once decoded, you will get two JSON strings:

                            The header and the payload.
                            The signature.
                            The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.

                            The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

                            There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.

                            The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. A common way to use JWTs is as OAuth bearer tokens. In this example, an authorization server creates a JWT at the request of a client and signs it so that it cannot be altered by any other party. The client will then send this JWT with its request to a REST API. The REST API will verify that the JWT’s signature matches its payload and header to determine that the JWT is valid. When the REST API has verified the JWT, it can use the claims to either grant or deny the client’s request.

                            In simpler terms, you can think of a JWT bearer token as an identity badge to get into a secured building. The badge comes with special permissions (the claims); that is, it may grant access to only select areas of the building. The authorization server in this analogy is the reception desk — or the issuer of the badge. And to verify that the badge is valid, the company logo is printed on it, similar to the signature of the JWT. If the badge holder attempts to access a restricted area, the permissions on the badge determine whether or not they can access the area, similar to the claims in a JWT.</p>
                    </div>
                </div>
                <div className="card card-compact w-96 md:w-full bg-base-100 shadow-xl mx-auto">
                    <div className="card-body">
                        <h2 className="card-title text-green-600 font-bold">What is the difference between javascript and NodeJS?</h2>
                        <p maxlength="50">JavaScript is a programming language, which runs in web browsers. Whereas Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all. JavaScript is basically one standard defining programming language; it can run any browser with a default browser running environment. It is a very strong language normally used for a web application on any verification or any specific business logic. We need to append in the screen without page refreshing. JavaScript also helps to use Ajax at any time, which helps us call any server-side script for given dynamic data based on the requirement. It also helps with generating dynamic HTML tables based on business requirement. JQuery is one of the popular libraries to make comfortable use of JavaScript by avoiding to write a lot of code.<br />
                            Node.js also holds a lot of relative libraries, which we normally use in javascript for general purpose programming language. It is actually a kind of environment or interpreter that can represent JavaScript or run any javascript program. It mainly helps us execute some non-blocking operation like some operating system special information like certificate details or hardware details; we may use node js on the same, which help us do it, and JavaScript normal programming will not help us on the same. Normally all browsers have a JavaScript engine that helps us to run javascript in a web browser. Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome) are some popular javascript engine using verities browsers. But node js is using the V8 engine directly, with some libraries to do some I/O or networking operations. It actually helps us use JavaScript from outside of the browser, like creating, writing or executing one shell script, some back-end services, or running on hardware. Let us understand  JavaScript vs Node JS in detail.
                        </p>
                    </div>
                </div>
                <div className="card card-compact w-96 md:w-full bg-base-100 shadow-xl mx-auto">
                    <div className="card-body">
                        <h2 className="card-title text-green-600 font-bold">How does NodeJS handle multiple requests at the same time?</h2>
                        <p maxlength="50">Given a NodeJS application, since Node is single threaded, say if processing involves a Promise.all that takes 8 seconds, does this mean that the client request that comes after this request would need to wait for eight seconds?
                            No. NodeJS event loop is single threaded. The entire server architecture for NodeJS is not single threaded.

                            Before getting into the Node server architecture, to take a look at typical multithreaded request response model, the web server would have multiple threads and when concurrent requests get to the webserver, the webserver picks threadOne from the threadPool and threadOne processes requestOne and responds to clientOne and when the second request comes in, the web server picks up the second thread from the threadPool and picks up requestTwo and processes it and responds to clientTwo. threadOne is responsible for all kinds of operations that requestOne demanded including doing any blocking IO operations.

                            The fact that the thread needs to wait for blocking IO operations is what makes it inefficient. With this kind of a model, the webserver is only able to serve as much requests as there are threads in the thread pool.

                            NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
                            NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.
                            So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue. What happens next?
                            The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself.
                            If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client.

                            How is NodeJS better than traditional multithreaded request response model?
                            With traditional multithreaded request/response model, every client gets a different thread where as with NodeJS, the simpler request are all handled directly by the EventLoop. This is an optimization of thread pool resources and there is no overhead of creating the threads for every client request.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;