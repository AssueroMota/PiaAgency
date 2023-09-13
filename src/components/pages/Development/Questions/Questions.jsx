import { useState } from 'react';

const questions = [
    {
        title: 'How can Website Design impact the success of my online business?',
        description: 'Website Design plays a pivotal role in the success of your online business. A well-crafted and appealing design can attract more visitors, enhance user experience, and increase the conversion rate of visitors into customers.',
        label: 'label1'
    },
    {
        title: 'How do you ensure that the design of my website is unique to my brand?',
        description: 'Our design team is highly skilled at creating customized designs that reflect your brand unique identity. We work closely with you to understand your needs and values, ensuring that your website is truly distinctive.',
        label: 'label2'
    },
    {
        title: 'What is the process for creating a website design in collaboration with my team?',
        description: 'We begin with a meeting to understand your goals and requirements. We then create wireframes and mockups to visualize the proposed design. After your approval, our development team works on implementation, keeping you informed at every step.',
        label: 'label3'
    },
    {
        title: "What is responsive design, and why is it important?",
        description: 'Responsive design allows your website to adapt automatically to different devices and screen sizes. This is crucial as it ensures that visitors have a consistent and pleasant experience, regardless of the device they are using to access your site.',
        label: 'label4'
    },
    {
        title: 'How do you choose the right colors and typography for my website?',
        description: 'Our team carefully considers colors that represent your brand and the messages you wish to convey. Additionally, we select typography that aligns with your identity and ensure readability to enhance user experience.',
        label: 'label5'
    },
    {
        title: 'How can Website Design enhance the usability of my site?',
        description: 'Our designers thoughtfully consider the arrangement of elements, intuitive navigation, and content organization to create a layout that facilitates user navigation. This results in a more enjoyable and productive experience for your visitors.',
        label: 'label6'
    },
    {
        title: 'Do you provide ongoing support after the website launch, in case I need to make design changes?',
        description: 'Absolutely! We offer continuous support to ensure your website remains updated and effective. If you require design adjustments or any visual changes, our team is ready to assist and ensure that your site always aligns with your objectives.',
        label: 'label7'
    },
    {
        title: 'How do you address image optimization and site performance?',
        description: 'We optimize all images to ensure the website loads quickly. This is important for visitor retention and improving search engine rankings. Our team uses advanced techniques to maintain visual quality even with smaller file sizes.',
        label: 'label8'
    }
    ,  {
        title: 'What are the current trends in Website Design that you can incorporate into my project?',
        description: 'We stay abreast of the latest design trends and can incorporate modern elements such as subtle animations, engaging microinteractions, and asymmetric layouts. However, we always adapt these trends to the specific needs and goals of your project.',
        label: 'label9'
    }
]

const Questions = () => {
    const [ isLabel, setLabel ] = useState('');

    return (
        <section className="questions" id="questions">
            <div className="questions__col-left">
                <h3 className="title">Frequently asked questions</h3>
                <p className="description">Here are some of our most frequently answered Web Design questions and answers.</p>
            </div>
            <div className="questions__col-right">
                {questions.map((question,indice) => (
                    <div key={indice} className="question-item">
                        <h1 className={`ask ${isLabel === question.label ? 'open' : 'close'}`} onClick={() => {
                            if(question.label === questions[indice].label){
                                setLabel(question.label);
                            }
                        }}>{question.title}</h1>
                        {
                            isLabel === question.label &&
                                <p className="answer">{question.description}</p>
                        }
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Questions;