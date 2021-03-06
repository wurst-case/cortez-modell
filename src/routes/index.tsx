import React, { lazy, Suspense } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { ThemeProvider } from 'emotion-theming'
import { theme } from '../styles'

import ErrorPage from '../pages/ErrorPage'
import Loading from '../pages/Loading'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

const Home = lazy(() => import('../pages/Home'))

export const history = createBrowserHistory()

function Routes() {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <ErrorPage>
          <Suspense fallback={<Loading />}>
            <Header />
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
          </Suspense>
          <Footer />
        </ErrorPage>
      </ThemeProvider>
    </Router>
  )
}

export default Routes
