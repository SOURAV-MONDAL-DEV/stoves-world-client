import React from 'react';

const Blog = () => {
    return (
        <div className='md:mx-10'>
            <div className='lg:mx-2 grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto my-10'>
                <div className="card card-compact w-96 md:w-full bg-base-100 shadow-xl mx-auto">
                    <div className="card-body">
                        <h2 className="card-title text-green-600 font-bold">How does prototypical inheritance work?</h2>
                        <p maxlength="50">Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.

                            Syntax:

                            ChildObject.__proto__ = ParentObject
                            Example In the given example, there are two objects ‘person’ and ‘GFGuser’. The object ‘GFGuser’ inherits the methods and properties of the object ‘person’ and further uses them.
                            In a class-based model, you have Classes, which are represented by the triple  Where:

                            Parents is the list of classes you’re extending. Classes may only extend other classes;
                            Variables is the number of variable slots that instances will have. For example, a “class Point2d(int x, int y) ” has 2 instance variables;
                            Methods is a table of “name → function” that describes which services each instance of the class will support;
                            Instances (or Objects) in a class-based model are represented with the tuple “. Where:

                            Class is a pointer to the class triple that defines how many variables this instance supports, and what methods you can call on it;
                            Values is a list of the values for each variable the instance has.
                            In this model, Classes only describe how instances look like, and Instances are the only thing you can interact with. Classes cannot be instances, and you can’t inherit from Instances.

                            “Inheritance” just means “a concatenation of the layouts” Then the complete set of ClassB methods is . It’s the union of all methods from the parents (generally with things to the right being chosen when there’s a conflict).

                            There are some languages that support the notion of Classes which can also be instances, like Ruby and Python. Python actually uses the model I’m going to describe later. Ruby uses evil black magic and you’ll wish you had never looked if you try prying under the hood[1] .

                            (And this is why I hate classes)

                            Now, someone realised at some point that you do not need classes.

                            Let’s look at what we’re trying to get with classes so far:

                            A way of declaring what objects look like (that is, what methods and variables it supports);
                            A way of extending this “looks like” relationship, so you don’t need to keep repeating yourself everywhere;
                            A way of having objects (that is, values you can interact through the methods it supports);</p>
                    </div>
                </div>
                <div className="card card-compact w-96 md:w-full bg-base-100 shadow-xl mx-auto">
                    <div className="card-body">
                        <h2 className="card-title text-green-600 font-bold">What are the different ways to manage a state in a React application?</h2>
                        <p maxlength="50">Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?

                            In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.

                            Want the #1 resource to learn React? You can become a React pro if you study 30 minutes a day with the React Bootcamp.
                            The Four Kinds of React State to Manage
                            When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

                            There are four main types of state you need to properly manage in your React apps:

                            Local state
                            Global state
                            Server state
                            URL state
                            Let's cover each of these in detail:

                            Local (UI) state – Local state is data we manage in one or another component.

                            Local state is most often managed in React using the useState hook.

                            For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.

                            Global (UI) state – Global state is data we manage across multiple components.

                            Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                            A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                            Sometimes state we think should be local might become global.

                            Server state – Data that comes from an external server that must be integrated with our UI state.

                            Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                            There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                            Fortunately there are tools such as SWR and React Query that make managing server state much easier.</p>
                    </div>
                </div>
                <div className="card card-compact w-96 md:w-full bg-base-100 shadow-xl mx-auto">
                    <div className="card-body">
                        <h2 className="card-title text-green-600 font-bold">What is a unit test? Why should we write unit tests?</h2>
                        <p maxlength="50">Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.

                            Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.

                            Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated.

                            How unit tests work
                            A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.

                            Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base.

                        </p>
                    </div>
                </div>
                <div className="card card-compact w-96 md:w-full bg-base-100 shadow-xl mx-auto">
                    <div className="card-body">
                        <h2 className="card-title text-green-600 font-bold">React vs. Angular vs. Vue?</h2>
                        <p maxlength="50">This post is a comprehensive guide on which is perhaps the right solution for you: Angular vs React vs Vue.

                            Just a couple of years ago, developers were mainly debating whether they should be using Angular vs React for their projects. But over the course of the last couple of years, we’ve seen a growth of interest in a third player called Vue.js.

                            If you are a developer starting out on a project and cannot decide on which JavaScript framework to use, this guide should help you make a decision.

                            Angular vs React vs Vue
                            Here we’ll cover various aspects of Angular, Vue, and React to see how they suit your needs. This post is not just a guide on Angular vs React vs Vue but aims to provide a structure to help judge front-end JavaScript frameworks in general. In case a new framework arrives next year, you will know exactly what parameters to look at!

                            * In this post, we assume that you have basic knowledge of JavaScript and have used JavaScript frameworks as well.

                            Let’s get started:

                            Table of contents:
                            Part 1: A brief history
                            
                            Part 5: Ready-to-use libraries
                            Who wins?
                            TL;DR: Are you looking for direct, head-to-head comparisons between Angular vs React, Angular vs Vue, and React vs Vue? Check out these short summaries here:

                            Angular vs React
                            If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.

                            React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.

                            React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.

                            </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;