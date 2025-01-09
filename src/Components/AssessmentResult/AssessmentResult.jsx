import React from 'react'
import { Heart, Phone, Calendar } from 'lucide-react'
import styles from './AssessmentResult.module.css'
import { useNavigate } from 'react-router-dom';

const AssessmentResult = ({ score = 18, setResultModalOpen }) => {
    // const score = 18; // Example score out of 27 (PHQ-9 scale)  

    const getSeverityLevel = (score) => {
        if (score >= 20)
            return {
                level: "Severe depression",
                color: "from-orange-200 via-red-200 to-rose-200",
                message: "Your responses indicate severe symptoms. It's important to know that help is available.",
                guidance: "Immediate professional support is recommended. Our care team is here to help 24/7."
            };
        if (score >= 15)
            return {
                level: "Moderately severe depression",
                color: "from-yellow-200 via-orange-200 to-red-200",
                message: "Your responses indicate moderately severe symptoms. You're not alone in this.",
                guidance: "Speaking with a mental health professional is strongly recommended."
            };
        if (score >= 10)
            return {
                level: "Moderate depression",
                color: "from-yellow-100 via-yellow-200 to-orange-200",
                message: "Your responses indicate moderate symptoms. Support can make a real difference.",
                guidance: "Consider scheduling a consultation with our mental health team."
            };
        if (score >= 5)
            return {
                level: "Mild depression",
                color: "from-emerald-100 via-teal-200 to-sky-200",
                message: "Your responses indicate mild symptoms. It's good that you're checking in.",
                guidance: "We recommend monitoring your symptoms and practicing self-care."
            };

        return {
            level: "Minimal depression",
            color: "from-green-100 via-emerald-200 to-teal-200",
            message: "Your responses indicate minimal symptoms. Keep taking care of yourself.",
            guidance: "Continue monitoring your well-being and maintain healthy habits."
        };
    };

    const severity = getSeverityLevel(score);

    const navigate = useNavigate();

    // return (
    //     <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-lg p-8">
    //         <div className="relative">
    //             {/* Circular progress indicator */}
    //             <div className="w-48 h-48 mx-auto mb-6">
    //                 <div className={`w-full h-full rounded-full bg-gradient-to-r ${severity.color} relative`}>
    //                     <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
    //                         <div className="text-center">
    //                             <div className="text-4xl font-semibold text-gray-800">{score}</div>
    //                             <div className="text-sm text-gray-500">/27</div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             {/* Severity Label */}
    //             <div className="text-center mb-4">
    //                 <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
    //                     PHQ-9 ASSESSMENT
    //                 </span>
    //             </div>
    //             {/* Severity Level */}
    //             <div className="text-center mb-3">
    //                 <h2 className="text-2xl font-semibold text-gray-800">
    //                     {severity.level}
    //                 </h2>
    //             </div>
    //             {/* Result Message */}
    //             <div className="text-center mb-6">
    //                 <p className="text-gray-700 mb-3">
    //                     {severity.message}
    //                 </p>
    //                 <p className="text-gray-600 text-sm">
    //                     {severity.guidance}
    //                 </p>
    //             </div>
    //             {/* Action Buttons */}
    //             <div className="space-y-3">
    //                 {score >= 10 ? (<button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors">
    //                     <Phone size={20} />
    //                     Speak with counselor now
    //                 </button>) : null}
    //                 <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors">
    //                     <Calendar size={20} />
    //                     Schedule consultation
    //                 </button>
    //             </div>
    //             {/* Resources Section */}
    //             <div className="mt-6 pt-6 border-t border-gray-100">
    //                 <h3 className="text-sm font-medium text-gray-800 mb-3">24/7 Crisis Support</h3>
    //                 <div className="text-sm text-gray-600">
    //                     <p>National Crisis Line: <span className="font-medium">988</span></p>
    //                     <p className="mt-1">Crisis Text Line: Text <span className="font-medium">HOME to 741741</span></p>
    //                 </div>
    //             </div>
    //             {/* Back Link */}
    //             <div className="mt-6 text-center">
    //                 <a href="#" title='back-btn' className="text-gray-500 hover:text-gray-600 text-sm">
    //                     Back to dashboard
    //                 </a>
    //             </div>
    //         </div>
    //     </div>);


    return (
        <div className={styles.ResultContainer}>
            <div styles={{ position: "relative" }}>
                <div className={styles.ProgressIndicator}>
                    <div className={`${styles.GradientCircle}
                    ${ score >= 20 ? `${styles.SevereDepressionGradient}` : 
                    (score >= 15) ? `${styles.ModeratelySevereDepressionGradient}` :
                    (score >= 10) ? `${styles.ModerateDepressionGradient}` :
                    (score >= 5) ? `${styles.MildDepressionGradient}` :
                    `${styles.MinimalDepressionGradient}` }`
                    // ${styles.ModeratelySevereDepression}`
                    }>
                        <div className={styles.InnerCircle}>
                            <div className={styles.ScoreText}>
                                <div className={styles.Score}>{score}</div>
                                <div className={styles.ScoreMax}>/27</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.SeverityLabel}>
                    <span className={styles.Label}>PHQ-9 ASSESSMENT</span>
                </div>

                <div className={styles.SeverityLevel}>
                    <h2 className={styles.LevelTitle}>{severity.level}</h2>
                </div>

                <div className={styles.ResultMessage}>
                    <p className={styles.Message}>{severity.message}</p>
                    <p className={styles.Guidance}>{severity.guidance}</p>
                </div>

                <div className={styles.ActionButtons}>
                    {score >= 10 && (
                        <button
                            className={`${styles.Button} ${styles.ButtonPrimary}`}
                            onClick={() =>{
                                setResultModalOpen(false);
                                navigate("/contact")
                            }}
                        >
                            <Phone size={20} />
                            Speak with counselor now
                        </button>
                    )}
                    {/* <button
                        className={`${styles.Button} ${styles.ButtonSecondary}`}>
                        <Calendar size={20} />
                        Schedule consultation
                    </button> */}
                </div>

                <div className={styles.ResourcesSection}>
                    <h3 className={styles.ResourcesHeader}>24/7 Crisis Support</h3>
                    <div className={styles.ResourcesText}>
                        <p>National Crisis Line: <span className="font-medium">988</span></p>
                        <p className="mt-1">Crisis Text Line: Text <span className="font-medium">HOME to 741741</span></p>
                    </div>
                </div>

                <div className={styles.BackLink}>
                    <a href="/assessments" title="back-btn">
                        Back to dashboard
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AssessmentResult;