import './style.css'

type HeadingProps = {
    title: string;
};

const Heading = ({ title }: HeadingProps) => {
    return (
        <div className='col-12 justify-content-center '>
            <svg viewBox="0 0 500 200"> {/* Updated viewBox for better alignment */}
                <defs>
                    <path id="curve" d="M 50,150 A 200,100 0 0,1 450,150" fill="none" />
                </defs>

                <text>
                    <textPath href="#curve" startOffset="50%" textAnchor="middle">
                        {title}
                    </textPath>
                </text>
            </svg>

        </div>
    )
}

export default Heading
