import React, { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import {TextField} from "@mui/material";
import '../styles/AutoComplete.scss';
function YourComponent() {
    const [address, setAddress] = useState('');
    const [setSelectedAddress] = useState(null);

    const handleSelect = async (selected) => {
        setAddress(selected);
        try {
            const results = await geocodeByAddress(selected);

            console.log('Ваш адрес : ', results[0]);
            setSelectedAddress(results[0]);
        } catch (error) {
            console.error('Помилка при отриманні координат :', error);
        }
    };

    return (
        <div>
            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
                searchOptions={{
                    types: ['(regions)'],
                }}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <TextField
                            label="Адреса"
                            variant="standard"
                            color="secondary"
                            style={{ marginTop: '10px' }}
                            focused
                            {...getInputProps({
                                apiKey: 'AIzaSyAM6sXLLbim115W9MMZVaEHuTNvmSbsF9E',
                            })}
                        />
                        <div>
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion) => (
                                <div className='autocompleteTable'
                                    {...getSuggestionItemProps(suggestion)}
                                    key={suggestion.id}
                                >
                                    {suggestion.description}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        </div>
    );
}

export default YourComponent;
