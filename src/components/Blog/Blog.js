import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className='q-a'>
                <h3>Whats the purpose of react router?</h3>
                <p>Ans:<small>React Router is a library for React routing. It enables navigation between views of different components in a React Application, changes the browser URL, and preserves the UI in synchronization with the URL.</small></p>
            </div>
            <div className='q-a'>
                <h3>How does context api work?</h3>
                <p>Ans:<small>The React Context API allows a React project to generate global variables that can be passed around. This is an alternative to "prop drilling" or passing props from grandparent to kid to parent, and so on.Use the createContext method to create a context.Wrap the context provider around your component tree using your newly formed context.Using the value prop, you may assign any value to your context provider.
                Using the context consumer, you may read that data from any component.</small></p>
            </div>
            <div className='q-a'>
                <h3>How 'useRef' hook works?</h3>
                <p>Ans:<small>The useRef Hook lets you save values between renderings. It may be used to hold a changeable value that does not require a re-render every time it is altered. It may be used to directly access a DOM element.useRef() returns only one item. It returns the object 'current'.
                We set the initial value of useRef when we initialize it: useRef (0).</small></p>
            </div>
        </div>
    );
};

export default Blog;