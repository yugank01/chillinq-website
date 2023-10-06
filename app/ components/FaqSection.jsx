import React from 'react'
import FAQ from './FAQ';
const FaqSection = () => {
    const faqs = [
        {
          question: 'What is Chillinq?',
          answer: 'Chillinq - a revolutionary dating and networking app that puts its users first. Unlike other apps in the market, Chillinq is built on the principles of transparency, privacy, and security. We understand that your personal information is valuable and should be treated with respect. That&apos;s why we&apos;ve designed a platform that prioritizes your privacy and puts you in control of your data.',
        },
        {
          question: 'How do I become a member of Chillinq network?',
          answer: 'Chillinq is a social media platform that aims to solve the problems and pain points of the online dating and networking space. Users can create a Queue on Chillinq for free. The Chillinq app uses a Community Verification mechanism to verify new users. Users earn rewards for helping in verifying profiles of other users anonymously.',
        },
        {
            question: 'What is Tier system feature ?',
            answer: 'The Chillinq app classifies users into three TIERs based on their dedication and contributions to the community. Users can only connect with users in the same or lower TIERs, which helps maintain the quality and authenticity of the connections. The TIER system is a tokenized model that uses $CHILL tokens/points to allocate users into three TIERs.'
        },    
        {
            question: 'What are $Chill points?',
            answer: 'Users earn Chill Points by rating and verifying profiles or they can be bought from the in-app marketplace, earned by watching ads voluntarily. These points can be used to join queues or redeemed for rewards. This system incentivizes users to contribute to the community and helps promote transparency. ',
          },
          {
            question: 'What is Queue Algorithm?',
            answer: 'The Chillinq app works on a Queue System, where users join a queue to connect with other users.The Queues are based on TIERs, which denote the user&apos; level of dedication to the Chillinq community. Users can only connect with others in queues that correspond to their TIER or a lower TIER. Creating/making a Queue is FREE for every registered user.',
          },
          {
            question: 'What is Voting System ?',
            answer: 'The Chillinq app also has an anonymous Voting System that allows users to participate in the governance process, earn rewards, and get credits to view more profiles. The Voting System in primarily used for assessing refunds requests of $CHILL Points/Tokens of other Users.',
          },
        // Add more FAQ items as needed
      ];
    
  return (
    <div>
      <div className='container mx-auto md:p-4'> 
          <h1 className="text-center text-white text-3xl font-extrabold mb-4 leading-tight tracking-tighter">Frequently Asked Questions</h1>
          <p className="text-center mx-auto w-60 sm:w-80 md:w-96 lg:w-2/5 text-gray-400 text-lg">
          LEARN MORE ABOUT CHILLINQ
          </p>
          {faqs.map((faq, index) => (
        <FAQ key={index} question={faq.question} answer={faq.answer} />
      ))}

          </div>
    </div>
  )
}

export default FaqSection
