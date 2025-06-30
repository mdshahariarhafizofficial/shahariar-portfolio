import { motion } from 'framer-motion';
import { FaBirthdayCake, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaIdCard, FaCalendarAlt, FaPhone } from 'react-icons/fa';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { MdLanguage, MdLocationPin, MdOutlineDesignServices } from 'react-icons/md';
import { TbProgress } from 'react-icons/tb';
import { HiLightBulb } from 'react-icons/hi';
import myPic from '../../assets/mypic.png'
import { IoIosMailOpen, IoMdMail } from 'react-icons/io';
import { HiAcademicCap } from 'react-icons/hi2';
const iconStyle = 'text-[#00f7ff] text-lg';
const labelStyle = 'text-[14px] text-gray-400';
const valueStyle = 'text-[14px] text-white';
const cardStyle = 'bg-[#111111] rounded-xl flex gap-4 items-start p-5 md:p-6';

export default function AboutMe() {
  return (
    <section id="about" className="w-full bg-[#000] pt-[40px] pb-20 px-4 md:px-0">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-8">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <h2 className="text-white text-[32px] md:text-[42px] font-bold leading-[1.2] tracking-tight">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-[15px] text-gray-400 font-normal">Discover my journey and expertise</p>
        </div>

        {/* Name + Short Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#111111] px-6 py-6 rounded-xl flex flex-col md:flex-row items-start md:items-center gap-4"
        >
          <div className="bg-[#0f2221] opacity-60 rounded-full flex items-center justify-center">
            <img src={myPic} alt="user" className="w-full" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl text-white font-semibold leading-tight">Md. Shahariar Hafiz</h3>
            <p className="text-sm text-primary font-medium leading-tight">
              MERN Stack Learner & Frontend Developer
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              <span className='text-primary text-xl'>❝ </span>
              I am a self-taught frontend developer passionate about building modern UI experiences. I've completed over 15+ personal and guided projects focusing on responsiveness and design quality.
              <span className='text-primary text-xl'>❞ </span>
            </p>
          </div>
        </motion.div>

        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-[#111111] p-6 rounded-xl"
        >
            <div className='flex items-center mb-4 gap-2'>
                <div className="w-14 flex items-center justify-center bg-[#0f2221] p-3 rounded-xl">
                  <FaIdCard className='text-white' size={25} />
                </div>
                <h2 className='text-white text-xl font-bold'>Personal Information</h2>
            </div>       

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
              <div className="bg-[#0f2221] p-3 rounded-xl">
                <FaCalendarAlt size={18} className='text-primary' />
              </div>
                <div>
                  <p className={labelStyle}>Date of Birth</p>
                  <p className={valueStyle}>January 01, 2005</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
              <div className="bg-[#0f2221] p-3 rounded-xl">
                <IoMdMail className='text-primary' size={18} />
              </div>
                <div>
                  <p className={labelStyle}>Email Address</p>
                  <p className={valueStyle}>shahariar.works@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
              <div className="bg-[#0f2221] p-3 rounded-xl">
                <HiAcademicCap className='text-primary' size={18} />
              </div>
                <div>
                  <p className={labelStyle}>EDUCATION</p>
                  <h2 className="text-primary">Diploma in Computer Science Engineering (2021-Present)</h2>
                  <p className={labelStyle}>Barisal gov't  Polytechnic Institute, Barishal, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
              <div className="bg-[#0f2221] p-3 rounded-xl">
                <FaPhone size={18} className='text-primary' />
              </div>
                <div>
                  <p className={labelStyle}>Phone Number</p>
                  <p className={valueStyle}>+880 1748630374</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
              <div className="bg-[#0f2221] p-3 rounded-xl">
                <MdLocationPin size={18} className='text-primary' />
              </div>                
                <div>
                  <p className={labelStyle}>Location</p>
                  <p className={valueStyle}>Barishal, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
              <div className="bg-[#0f2221] p-3 rounded-xl">
                <MdLanguage size={18} className='text-primary' />
              </div>                
                <div>
                  <p className={labelStyle}>Language</p>
                  <p className={valueStyle}>English, Bangla, Hindi, Urdu</p>
                </div>
              </div>
            </div>
          </div>


        </motion.div>

        {/* Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={cardStyle}
          >
            <div className="bg-[#0f2221] p-3 rounded-full">
              <RiCodeSSlashLine className="text-primary" size={20} />
            </div>
            <div>
              <h5 className="text-white text-lg font-semibold">Frontend Development</h5>
              <p className="text-gray-400 text-base leading-relaxed">Building responsive and performant web applications using React and best practices.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={cardStyle}
          >
            <div className="bg-[#0f2221] p-3 rounded-full">
              <MdOutlineDesignServices className="text-primary" size={20} />
            </div>
            <div>
              <h5 className="text-white text-lg font-semibold">UI/UX Implementation</h5>
              <p className="text-gray-400 text-base leading-relaxed">Converting design concepts into pixel-perfect, interactive interfaces with attention to accessibility.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className={cardStyle}
          >
            <div className="bg-[#0f2221] p-3 rounded-full">
              <TbProgress className="text-primary" size={20} />
            </div>
            <div>
              <h5 className="text-white text-lg font-semibold">End-to-End Process</h5>
              <p className="text-gray-400 text-base leading-relaxed">Managing complete design lifecycle with attention to detail.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className={cardStyle}
          >
            <div className="bg-[#0f2221] p-3 rounded-full">
              <HiLightBulb className="text-primary" size={20} />
            </div>
            <div>
              <h5 className="text-white text-lg font-semibold">Always Evolving</h5>
              <p className="text-gray-400 text-base leading-relaxed">Learning modern tools & best practices.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
