import React, { useEffect, useState } from 'react'
import { quotesUrl } from '../../../../config'

const Quotes = () => {
  const [quote, setQuote] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(quotesUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:
        '{"query":"query MyQuery {\\n  quote(last: 1) {\\n    id\\n    text\\n    author\\n    senderName\\n    senderLink\\n    createdAt\\n  }\\n}\\n","operationName":"MyQuery"}',
    })
      .then(res => res.json())
      .then(({ data: { quote } }) => {
        setQuote(quote[0]) & setLoading(false)
      })
  }, [])

  return (
    <div className="container">
      <h1 className="titleSeparate">سخنی از دوست</h1>
      {!loading && (
        <blockquote>
          {quote.text}
          <cite>~ {quote.author}</cite>
          <div className="sender">
            <span>
              {quote.senderLink ? (
                <a href={quote.senderLink}>{quote.senderName}</a>
              ) : (
                <span>{quote.senderName}</span>
              )}
            </span>
            <time dateTime={quote.createdAt}>
              {new Date(quote.createdAt).toLocaleDateString('fa-IR')}
            </time>
          </div>
        </blockquote>
      )}
    </div>
  )
}

export default Quotes
