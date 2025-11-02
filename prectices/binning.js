//? Input
const events = [
  { timestamp: "2025-10-22T10:01:00Z", type: "click" },

  { timestamp: "2025-10-22T10:05:00Z", type: "scroll" },

  { timestamp: "2025-10-22T10:14:00Z", type: "click" },

  { timestamp: "2025-10-22T10:31:00Z", type: "click" },

  { timestamp: "2025-10-22T10:45:08Z", type: "scroll" },

  { timestamp: "2025-10-22T11:02:00Z", type: "click" },
];
const INTERVAL = 30 * 60 * 1000; //30 mints in ms

const getBinningTimesTamp = (timestamp) => {
  const date = new Date(timestamp);
  const flooredDate = Math.floor(date.getTime() / INTERVAL) * INTERVAL;

  return new Date(flooredDate);
};


const binnedData=events.reduce((acc,event)=>{
const bin = getBinningTimesTamp(event.timestamp)
if (!acc[bin]) {
    acc[bin]={total:0}
}
acc[bin].total=acc[bin].total+1
return bin;

},{})

console.log(binnedData);