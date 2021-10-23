import Card from './Card'

const SVGPreview = ({backgroundFill}) => {
  return ( 
    <div className="my-4 mr-4">
      <Card>
        <svg width="350" height="350" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="350" height="350" fill={backgroundFill} />
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
        </svg>
      </Card>
    </div>
  );
}
 
export default SVGPreview;