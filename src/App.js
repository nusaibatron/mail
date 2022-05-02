import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Mail from "./Mail";
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [mails, setMails] = useState([]);

  useEffect(() => {
    if (loading) return;
    setMails(data[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  const nextPage = () => {
    if (page === data.length - 1) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };
  const prevPage = () => {
    if (page === 0) {
      setPage(data.length - 1);
    } else {
      setPage(page - 1);
    }
  };
  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "Mail"}</h1>
        <div className="underline"></div>
      </div>
      <section className="mails">
        <div className="container">
          {mails.map((mail) => {
            return <Mail key={mail.id} {...mail} />;
          })}
        </div>
        <div className="btn-container">
          <button className="btn next-btn" onClick={() => prevPage()}>
            {!loading ? "Previous" : null}
          </button>
          {loading
            ? null
            : data.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={`page-btn ${
                      index === page ? "active-btn" : null
                    }`}
                    onClick={() => {
                      handlePage(index);
                    }}
                  >
                    {index + 1}
                  </button>
                );
              })}
          <button className="btn next-btn" onClick={() => nextPage()}>
            {!loading ? "Next" : null}
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
