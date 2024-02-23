export const BlockPhotopass = (props) => {
    if (props.photopass) {
        return (
            <li className="photopass">
                <div className="picto">
                    <i class="fa fa-camera"></i>{props.photopass}
                </div>
                <div className="note">Service de photographes Disney PhotoPass
                    ou de photos dans les attractions équipées.
                </div>
            </li>
        )
    }
}