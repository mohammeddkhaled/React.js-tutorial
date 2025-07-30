
const container3 = (

    <div style={{ maxWidth: 300, height: 400, backgroundColor: 'red', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderColor: 'black', borderWidth: 2, borderStyle: 'solid' }}>
        <h1>React Form</h1>
        <section>
            <div>
                <label htmlFor="username" style={{ fontSize: 20, marginLeft: 55 }}
                >username</label
                ><input
                    id="username"
                    style={{ width: 200, height: '30px', marginInline: '50px', marginBlock: '10px' }}
                />
            </div>
            <div>
                <label htmlFor="email" style={{ fontSize: '20px', marginLeft: '55px' }}
                >EMail</label
                ><input
                    id="email"
                    style={{ width: 200, height: '30px', marginInline: '50px', marginBlock: '10px' }}
                />
            </div>
            <div>
                <label htmlFor="pass" style={{ fontSize: '20px', marginLeft: '55px' }}
                >password</label
                ><input
                    id="pass"
                    type="password"
                    style={{ width: 200, height: '30px', marginInline: '50px', marginBlock: '10px' }}
                />
            </div>
            <button style={{ fontSize: '16px', marginInline: '100px', }}>submit</button>
        </section>
    </div>
)
const root3 = ReactDOM.createRoot(document.querySelector('#root3'))
root3.render(container3)
