'use client'

import React, {useEffect, useState} from 'react';
import Paginate from 'react-paginate';
import Link from "next/link";

const Home: React.FC = () => {
    const [fileNames, setFileNames] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(0);

    const PAGE_SIZE = 10; // número de nombres de archivo por página

    useEffect(() => {
        try {
            fetch('/api').then((response) => {
                response.json().then((data) => {
                    setFileNames(data);
                })
            });
        } catch (error) {
            console.error(error);
        }
    }, []);

    const handlePageClick = (selectedObject: {
        selected: number
    }) => {
        setCurrentPage(selectedObject.selected);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#f5f5f5',
        }}>
            <h1 style={
                {
                    marginBottom: '20px',
                    color: '#333',
                    textTransform: 'uppercase',
                }
            }>Listado de capítulos</h1>
            {fileNames.slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE).map((fileName, index) => (
                <Link href={"/movie?movie=" + fileName} key={index} style={styles.link}>
                    {fileName}
                </Link>
            ))}
            <div className={"flex gap-x-5"}>
                <Paginate
                    pageCount={Math.ceil(fileNames.length / PAGE_SIZE)}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={2}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    nextClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextLinkClassName={"page-link"}
                    className={"flex gap-x-5 py-4 bg-white border-t border-gray-200 sm:px-6"}
                />
            </div>
        </div>
    );
};

const styles = {
    container: {},
    title: {},
    link: {
        color: '#0645AD',
        textDecoration: 'none',
    },
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        listStyle: 'none',
    },
};

export default Home;