import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo';
import App from './components/App'
import reducer from './reducers/reducer'

const store = createStore(reducer),
    client = new ApolloClient({
        link: new HttpLink({ uri: 'https://simple-api-url-here' }),
        cache: new InMemoryCache()
    });

render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <App/>
        </Provider>
    </ApolloProvider>,
    document.getElementById('root')
);