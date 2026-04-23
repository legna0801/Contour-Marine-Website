import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { home } from './pages/home'
import { seawalls } from './pages/seawalls'
import { docks } from './pages/docks'
import { decks } from './pages/decks'
import { boatlifts } from './pages/boatlifts'
import { pilings } from './pages/pilings'
import { gallery } from './pages/gallery'
import { about } from './pages/about'
import { contact } from './pages/contact'

const app = new Hono()

// Static assets
app.use('/static/*', serveStatic({ root: './' }))

// Pages
app.get('/',               (c) => c.html(home()))
app.get('/index.html',     (c) => c.html(home()))
app.get('/seawalls.html',  (c) => c.html(seawalls()))
app.get('/docks.html',     (c) => c.html(docks()))
app.get('/decks.html',     (c) => c.html(decks()))
app.get('/boatlifts.html', (c) => c.html(boatlifts()))
app.get('/pilings.html',   (c) => c.html(pilings()))
app.get('/gallery.html',   (c) => c.html(gallery()))
app.get('/about.html',     (c) => c.html(about()))
app.get('/contact.html',   (c) => c.html(contact()))

export default app
