import React from 'react';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        // this.props.history.push('/')
        var {socket} = this.props;
        history.go(-1);
        this.props.leave(socket)
    }
    render() {
        let { title,leftto } = this.props;
        let left = null;
        if(leftto == "kong"){
            left = (<div></div>)
        }else if(leftto == "fanhui"){
            left = (
                <div className="fanhui" onClick={this.handleClick}>
                    <i className="iconfont icon-fanhui"></i>
                </div>
            )
        }
        return(
            <div className="top">
                {left}
                <div className="title">{title}</div>
                <div className="gengduo" onClick={this.props.side}>更多</div>
            </div>     
        )
    }
}


export class Chatli extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {userName,msg} = this.props.msgList
        let {user} = this.props
        var name = '';
        var cmsg = '';
        if(user == userName){
            name = 'name1'
            cmsg = 'cmsg1'
        }else{
            name = 'name'
            cmsg = 'cmsg'
        }
        return(
            <div className="li clear">
                <div className={name}>
                    {userName}
                </div>
                <div className={cmsg}>
                    {msg}
                </div>
            </div>
        )
    }
}

export class Side extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {roomInfo,side} = this.props.global;
        let sidelist = '';
        let sideb ='';
        if(side){
            sidelist = 'side-list'
            sideb = 'side'
        }else{
            sidelist = 'side1'
            sideb = 'side1'
        }
        return(
            <div>
                <div className={sideb} onClick={(e) => this.props.side(e)}></div>
                <div className={sidelist}>
                    {
                        roomInfo == null ? <div></div> : <Sideli roomInfo={roomInfo}/>
                    }
                </div>
            </div>
        )
    }
}

class Sideli extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {roomInfo} = this.props
        return(
            <div className="sideli">
                <div className="sideli-top">房间在线人数：{roomInfo.length}</div>
                <div className="roomPer">房间在线成员</div>
                <div className="sideli-box">
                    {
                        roomInfo.map((ele,index) => {
                            return(
                                <div className="box-li" key={index}>{ele}</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}