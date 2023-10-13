import React from 'react'
import Wheel from './pages/Wheel';
import Display from './pages/Display';

import '../css/Body.css';

class Body extends React.Component {
	
	render(){
		const {active,updateActiveMenu, currentMenu, changeMenuBackward,changeMenuForward, menuItems, musicItems,togglePlayPause, songItems,playing, songIndex,theme, audio, songUrl, songImgUrl, seekForward, seekReverse, wheelColor ,wallpaper, wallpaperItems, noty, setNoty, notifyText} = this.props;
		return (
			<div className='main-container'>
				<div className='body' style={{backgroundColor:theme}}>
						
						<Display 
							songIndex={songIndex}
							playing={playing}
							active={active}
							musicItems={musicItems}
							menuItems={menuItems}
							currentMenu={currentMenu}
							songItems={songItems}
							audio={audio}
							songUrl={songUrl}
							songImgUrl={songImgUrl}
							wallpaper={wallpaper}
							wallpaperItems={wallpaperItems}
							noty={noty}
							setNoty={setNoty}
							notifyText={notifyText}
						/>

					  	<Wheel 
							seekForward={seekForward} 
							seekReverse={seekReverse}
							togglePlayPause={togglePlayPause}
							updateActiveMenu={updateActiveMenu}
							theme={theme}
							active={active}
							menuItems={menuItems}
							currentMenu={currentMenu}
							changeMenuBackward={changeMenuBackward}
							changeMenuForward={changeMenuForward}
							wheelColor={wheelColor}							
						/>
				</div>
			</div>
		)
	}
}

export default Body