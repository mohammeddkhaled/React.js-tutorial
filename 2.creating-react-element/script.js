//////////////////////////////////////////////// creating element using java script //////////////////////////////////////////////////////////////////////////////////////////

// // Create a new div element
// let newDiv = document.createElement("div");

// // Add some text to the div
// newDiv.textContent = "Hello, I am a new div!";

// // Add a class to style it
// newDiv.classList.add("my-div");

// // Append it to the body (or any other parent element)
// document.body.appendChild(newDiv);
//////////////////////////////////////////////////////java script nested element /////////////////////////////////////////////////////////////////////////////////////////

// // Create parent div
// let card = document.createElement("div");
// card.classList.add("card");

// // Create heading
// let heading = document.createElement("h2");
// heading.textContent = "Hello";

// // Create paragraph
// let paragraph = document.createElement("p");
// paragraph.textContent = "This is a nested element";

// // Append children to parent
// card.appendChild(heading);
// card.appendChild(paragraph);

// // Finally, add the parent div to the body
// document.body.appendChild(card);

///////////////////////////////////////////////////////// creating element using react//////////////////////////////////////////////////////////////////////////////////////

// const container = React.createElement('div', { className: 'container' }, 'react element container')

// const root = ReactDOM.createRoot(document.querySelector('#root'))

// root.render(container)

/////////////////////////////////////////////////////////creating nested element using react by array  //////////////////////////////////////////////////////////////////////////

// const container2 = React.createElement('div', { className: 'container2' },
//     [
//         React.createElement('h1', { key: 1 }, 'nested element heading'),
//         React.createElement('div', { key: 2 },
//             [
//                 React.createElement('p', { key: 2.1 }, 'nested element paragraph-1 sibling '),
//                 React.createElement('p', { key: 2.2 }, 'nested element paragraph-2 sibling '),
//             ]),

//         React.createElement('button', { key: 3 }, 'nested button'),
//         React.createElement('img',
//             {
//                 key: 3,
//                 src: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*x-HyaNxF4CJW0gSc.png",
//                 style: { width: 200, display:'flex', marginTop: 50}
//             })


//     ]

// )
// const root2 = ReactDOM.createRoot(document.querySelector('#root2'))
// root2.render(container2)

//////////////////////////////////////////////////////////////// CREATING FORM USING REACT ONLY//////////////////////////////////////////////////////////////////////////


const container3 = React.createElement('div', { style: { maxWidth: 300, height: 400, backgroundColor: 'red', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderColor: 'black', borderWidth: 2, borderStyle: 'solid' } },
    [
        React.createElement('h1',
            {
                key: 1,
                style:
                {

                }
            },
            'React Form'),
        React.createElement('section', { key: 2 },
            [
                React.createElement('div', { key: 1 }, [
                    React.createElement('label', { key: 1.1, htmlFor:'username', style:{fontSize:'20px', marginLeft:'55px'} }, 'username'),
                    React.createElement('input', { key: 1.2, id:"username", style: { width: 200, height: '30px', marginInline: '50px', marginBlock: '10px' } }),
                ]),

                React.createElement('div', { key: 2 }, [
                    React.createElement('label', { key: 2.1, htmlFor:'email' , style:{fontSize:'20px', marginLeft:'55px'} }, 'EMail'),
                    React.createElement('input', { key: 2.2, id:'email', style: { width: 200, height: '30px', marginInline: '50px', marginBlock: '10px' } }),
                ]),


                React.createElement('div', { key: 3 }, [
                    React.createElement('label', { key: 3.1,  htmlFor:'pass' , style:{fontSize:'20px', marginLeft:'55px'} }, 'password'),
                    React.createElement('input', { key: 3.2, id:'pass', type:'password', style: { width: 200, height: '30px', marginInline: '50px', marginBlock: '10px' } }),
                ]),


                React.createElement('button', { key: 4, style: { fontSize: '16px', marginInline: '100px', } }, 'submit'),


            ])

    ])

const root3 = ReactDOM.createRoot(document.querySelector('#root3'))

root3.render(container3)
