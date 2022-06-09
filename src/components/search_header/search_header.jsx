import React,{useRef} from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({onSearch}) => {

    const inputRef=useRef();

    const handleSearch=()=>{
        const value=inputRef.current.value;
        onSearch(value);
    }

    const onClick=()=>{
        handleSearch();
    }
    
    const onKeyDown=(e)=>{
        if(e.key==="Enter"){
            handleSearch();
        }
    }

    const reload=()=>{
        window.location.reload();
    }

    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src="/images/logo.png" alt="logo" onClick={reload}/>
            </div>
            <input 
                ref={inputRef}
                className={styles.input} 
                type="search" 
                placeholder="search"
                onKeyDown={onKeyDown}
            />
            <div onClick={onClick}>
                <i id={styles.searchLogo} className="fas fa-search"></i>        
            </div>
        </header>
    )
};

export default SearchHeader;