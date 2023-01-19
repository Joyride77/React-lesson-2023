import React from 'react'

const Header = (props) => {
    return (
        <div className="ui menu">
            <div className="right menu">
                <a className="item active">
                    <i className="heart icon ">
                        {props.wishList.length}
                    </i>
                    <div className="ui compact menu">
                        <div className="ui simple dropdown item">
                            WishList
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                {props.wishList.map((w, index) => {
                                    return (
                                        <div key={index} className="item">
                                            <div className="ui card">
                                                <div className="image">
                                                    <img src={w.img} />
                                                </div>
                                                <div className="content">
                                                    <a className="header">{w.name}</a>
                                                    <div className="description">
                                                        {w.description}
                                                    </div>
                                                </div>
                                                <div className="extra content">
                                                    <a>
                                                        <button className="ui button" onClick={() => {
                                                            props.setWishList(props.wishList.filter((wish) => wish.id !== w.id));
                                                        }}><i className="close icon"></i></button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </a>
                <a className="item"><i className="shopping basket icon"></i></a>
            </div>
        </div>
    )
}

export default Header