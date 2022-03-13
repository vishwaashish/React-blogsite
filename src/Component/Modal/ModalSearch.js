import React, { useRef } from 'react';
import { useQuery } from 'react-query';
import { NavLink} from 'react-router-dom';
import { Callgetapi } from '../../Api/CallApi';

const ModalSearch = (props) => {

    const { toggle } = props
    const { data } = useQuery('post', Callgetapi)
    const inputref = useRef(null)
    const [values, setValues] = React.useState("")
    const [apidata, setApiData] = React.useState([])
    const ToggleClose = () => {
        toggle(isOpen => !isOpen)
    }
    React.useEffect(() => {
        inputref.current.focus();
    }, [])

    const Handlevalue = (e) => {
        const { value } = e.target
        const searchvalue = value.toLowerCase()
        if (value.length > 1) {
            setValues(searchvalue)
            const filter = data.filter(val => val.title.toLowerCase().match(searchvalue))
            setApiData(filter)
        } else if (value.length === 0) {
            setApiData([])
        }
    }
    const Result = () => {

        const escapeRegExp = (str = '') => (
            str.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1')
        );
        if (apidata.length !== 0) {
            const patt = new RegExp(`(${escapeRegExp(values)})`, 'i')
            return (
                <div className="search-div-result" >{
                    apidata.map((item, index) => {
                        const parts = String(item.title).split(patt);
                        return <NavLink to={"/post/" + item.id} key={index} onClick={ToggleClose} >
                            <div className="search-result">
                                <i className='fa fa-file-alt' />
                                <p>
                                    {
                                        parts.map((part, index) => (
                                            patt.test(part) ? <mark key={index}>{part}</mark> : part
                                        ))
                                    }
                                </p>
                            </div>
                        </NavLink>
                    })
                }</div>
            )
        } else if (values.length === 0) {
            return <div className='error'>No recent searches</div>
        }
        else {
            return <div className="error">Not Found</div>
        }
    }
    return (
        <div className="modal-search" >
            <div className="modal-search-dialog" >
                <div className='icon'><i className='fa fa-times close' onClick={ToggleClose} /></div>
                <div className="modal-search-content">
                    <div className="modal-search-header">
                        <div className="input-group">
                            <i className="fa fa-search" />
                            <input type="search" ref={inputref} name="search" placeholder="Search..." onChange={Handlevalue} autoComplete="off" />
                        </div>
                    </div>
                    <div className="modal-search-body">
                        <Result />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(ModalSearch);
