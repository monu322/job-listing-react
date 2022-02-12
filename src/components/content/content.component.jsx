import React, {useContext, useEffect, useState} from "react";

import './content.styles.scss';

import {Container, Row, Col} from 'react-bootstrap';

import Listing from '../listing/listing.component';
import Tags from "../tags/tags.component";

import listings_data from '../../assets/data/listings.json';

import { SearchTagsContext } from "../../contexts/searchTagsContext";

function Content(props) {

    const { searchTags } = useContext(SearchTagsContext);
    
    const searchTagsLC = searchTags.map(name => name.toLowerCase());

    const [listings, setListings] = useState([]);

    useEffect(() => {
        
        setListings(listings_data);

    }, []);

    return (
        <div className="content">
            <Container className="page-container content-container">
                
                <Tags/>

                {
                    listings.filter(listing=>{

                        const found = listing.tags.some(tag=> searchTagsLC.includes(tag.toLowerCase()))
                        
                        if(searchTags.length===0)
                        {
                            return true
                        }
                        else
                        {
                            return found
                        }

                    }).map((item, key) => 
                    (
                        <Listing key={item.id} item={item}/>
                    ))
                }

                

            </Container>
        </div>
    )
}

export default Content;
