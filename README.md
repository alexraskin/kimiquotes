# :speech_balloon: KimiQuotes API

<br />
<div align=center>
    <img src='kimi.gif' width=320 height=201 />
</div>
<br />

<div align=center>
    <b>Team radio and interview quotes by Finnish F1 legend Kimi Räikkönen</b>
</div>
<br />

<p align=center>
	Inspired by <a href=https://github.com/ajzbc/kanye.rest>ajzbc's kanye.rest</a> and <a href=https://github.com/oanhgle/bangtan-api>oanhgle's bangtan-api</a>
</p>
<br />

## :computer: Usage

Make queries to the API using a URI with the following format:

```bash
https://kimiquotes.pages.dev[endpoint]
```

<p><em>See below for a list of available endpoints</em></p>

## :zap: Endpoints

GET all quotes

```bash
/api/quotes
```

GET all quotes from a specified year

```bash
/api/quotes/:year
```

GET all quotes that don't come with year timestamps

```bash
/api/quotes/unstamped
```

GET a quote using its ID

```bash
/api/quote/:id
```

GET a random quote

```bash
/api/quote
```

## :floppy_disk: Run Locally

Clone the project repo

```bash
git clone https://github.com/alexraskin/kimiquotes.git
```

Install the dependencies

```bash
cd kimiquotes
npm install

```bash
npm run dev
```

## :memo: To-Do

- Nothing at the moment — quote contributions/updates are welcome!

## :star2: Potential Improvements

- Implement `POST`, `PATCH`, and `DELETE` endpoints
- Categorize quotes (e.g. emotion, team radio, interview, venue)
