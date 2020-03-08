import React, { useState, useEffect } from 'react';

const App = () => {
  const [foo, setFoo] = useState('N/A');

  useEffect(() => {
    fetch('/api/foo')
      .then((response) => response.json())
      .then((data) => setFoo(data.foo))
      .catch((err) => setFoo(err.message));
  });

  return (
    <div>
      <h1>Hello World!</h1>
      <p>
        Server responded with foo:
        {foo}
      </p>
    </div>
  );
};

export default App;
