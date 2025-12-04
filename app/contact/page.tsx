import phone from '@/public/images/phone.png'
import mail from '@/public/images/mail.png'
import location from '@/public/images/location.jpg'
import Image from 'next/image'


export default function Contact() {

    return (
        <div className="min-h-[calc(100vh-48px)] bg-gray-300 flex justify-center items-center">
            <div className="w-full bg-white max-w-3xl rounded-2xl p-8">
                <div className="text-[60px] font-bold text-center mb-20">
                    Let's Chat
                </div>
                <div className="flex justify-between">
                    <div><span><Image src={phone} alt='Not found' width={20} height={20}/>Call us at</span><br />9629428592</div>
                    <div><span><Image src={location} alt='Not found' width={20} height={20}/></span>4A1, Thillai Nagar, Ramnagar, Devakottai</div>
                    <div><span><Image src={mail} alt='Not found' width={20} height={20}/>Email us at</span><br />abineshms7@gmail.com</div>
                </div>
            </div>
        </div>
    )
}