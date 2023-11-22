import { Hono, Context } from 'hono'
import { handle } from 'hono/cloudflare-pages'

import quotes from '../../data/quotes';
import {
    getAllQuotes,
    getQuotesByYear,
    getQuoteByIndex,
    getAnyQuote
} from '../../controllers/controllers';

const app = new Hono().basePath('/api')

app.get('/', (c: Context) => {
    return c.json({ message: 'Welcome to the API' }, 200);
})

app.get('/quotes', (c: Context) =>{
    const result = getAllQuotes(quotes);
    return c.json(result, 200);
})

app.get('/quotes/:year', (c: Context) => {
    const year  = c.req.param('year')
    let result = undefined;
    if (year === 'unstamped') {
        result = getQuotesByYear(quotes);
    } else {
        result = getQuotesByYear(quotes, year);
    }

    if (result === 404) {
        return c.json({ error: `no quotes found for year ${year}`}, 404);
    } else {
        return c.json(result, 200);
    }
})

app.get('/quote', (c: Context) => {
    const result = getAnyQuote(quotes);
    return c.json(result, 200);
})

app.get('/quote/:id', (c: Context) => {
    const id = c.req.param('id');
    const result = getQuoteByIndex(quotes, parseInt(id));

    if (result === 404) {
        return c.json({ error: `no quote found for id ${id}`}, 404);
    } else {
        return c.json(result, 200);
    }
})

export const onRequest = handle(app)
