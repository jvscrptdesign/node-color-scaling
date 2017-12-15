    mountColorBar(row, activeHval) {
        const elem = document.getElementById(this.props.row);
        const ctx = elem.getContext("2d");
        const grd = ctx.createLinearGradient(0, 0, elem.width, 0);

        this.styleColorBar(grd, this.props.row, activeHval);

        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, elem.width, elem.height);
    }

    styleColorBar(grd, type, activeHval) {
        for(var i=0; i<=1; i+=0.01){
            grd.addColorStop(i, `hsl(${type==='H' ? 360*i : activeHval},${type==='S' ? 100*i : 100}%,${type==='L' ? 100*i : 50}%)`);
        }
    }

    componentWillUpdate(nextProps, nextState) {
        this.mountColorBar(this.props.row, nextProps.activeHval);
    }

    componentDidMount() {
        this.mountColorBar(this.props.row, this.props.activeHval);
    }
