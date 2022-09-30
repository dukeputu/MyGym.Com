import React from 'react';

const Accordion = () => {
    return (
        <div className='mb-5 border rounded'>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <b>How does react work?</b>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">React is a library that allows you to write JavaScript components. It uses a syntax similar to XML, and the markup of the components is a mix between HTML and XML.
                            <br /><br />
                            It uses a technology called the “Virtual DOM” to manage updates. Virtual DOM is just another way of saying a big object with all the components rendered on the page and their properties. Whenever one of them changes, React knows what to do.
                            <br /><br />
                            For event handling, React registers a global event handler (on the HTML or Body element) and whenever events come through that listener, it takes on the responsibility to propagate the proper events and trigger the right handlers within components further down the chain.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <b>What is the difference between State and props in ReactJs?</b>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <b> Props = the things the outside world throws at you.</b>
                            <br /><br />
                            Did your boss call to give you some information so you could carry on with a task? Those are called props. He/she passed you some props.
                            <br /><br />
                            <b>State = how you feel inside and how it reflects on the outside.</b>
                            <br /><br />
                            How the outside world and your internal beliefs reflect in your behaviour. What do your face and posture look like? Do you frown, slouch, smile?
                            <br /><br />
                            That’s state. You either get to keep that for yourself or share it with a friend called “the store”.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <b>When use useeffect in react?</b>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            useEffect is a part of the standard hooks which come out-of-the-box with the React package. Its also called effect hook.
<br />
                            It is used when you are dealing with side effects in a component(app).
<br />
                            Any operation(function) which modifies local state value from outside is a side effect. Examples are data fetching, subscriptions to a service, manual DOM manipulation. Some effects require cleaning up after use. By default, all hooks run after render. You can customize when it should run by passing parameters.
<br />
                            To use effect hook it correctly, you should have a good idea about what is the side effect is doing and how it modifies the local state. Also, you might think about how often it occurs.
<br />
                            Take a data fetching operation. You fetch some data from an API and assign it to a local variable in the component. By default, it will run after each render. This can easily bottleneck the component and mess up all the internal state. Therefore you have to design the hook to run only when a specific event has happened.
<br />
                            Thinking a bit beforehand, about what the component is doing and how the effect hook fits into a component is a good practice. Do not overthink it. The more simple and concise hook you make, the better it will be.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;